module.exports = function(grunt) {
    grunt.initConfig({

    }
    });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['watch']);
};