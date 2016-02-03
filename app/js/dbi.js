/**
 * Created by zews on 28.01.2016.
 */

var indexedDB 	  = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
    IDBTransaction  = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction,
    baseName 	  = "lesovik",
    storeName 	  = "users";

function logerr(err){
    console.log(err);
}

function connectDB(f){
    var request = indexedDB.open(baseName, 1);
    request.onerror = logerr;
    request.onsuccess = function(){
        f(request.result);
    }
    request.onupgradeneeded = function(e){
        e.currentTarget.result.createObjectStore(storeName, { useID: "ID" });
        connectDB(f);
    }
}

function getFile(file, f){
    connectDB(function(db){
        var request = db.transaction([storeName], "readonly").objectStore(storeName).get(file);
        request.onerror = logerr;
        request.onsuccess = function(){
            f(request.result ? request.result : -1);
        }
    });
}

function getStorage(f){
    connectDB(function(db){
        var rows = [],
            store = db.transaction([storeName], "readonly").objectStore(storeName);

        if(store.mozGetAll)
            store.mozGetAll().onsuccess = function(e){
                f(e.target.result);
            };
        else
            store.openCursor().onsuccess = function(e) {
                var cursor = e.target.result;
                if(cursor){
                    rows.push(cursor.value);
                    cursor.continue();
                }
                else {
                    f(rows);
                }
            };
    });
}

function setFile(file){
    connectDB(function(db){
        var request = db.transaction([storeName], "readwrite").objectStore(storeName).put(file);
        request.onerror = logerr;
        request.onsuccess = function(){
            return request.result;
        }
    });
}

function delFile(file){
    connectDB(function(db){
        var request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(file);
        request.onerror = logerr;
        request.onsuccess = function(){
            console.log("File delete from DB:", file);
        }
    });
}

