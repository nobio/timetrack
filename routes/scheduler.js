var scheduler = require('node-schedule');
var admin = require('./admin');

/**
 * start scheduler to run tasks
 */
exports.scheduleTasks = function() {


    // start the scheduler
    console.log("job scheduler: calcStats (every hour at ??:00)");
    scheduler.scheduleJob({minute: 0}, function() {  // every hour at ??:00
        console.log('scheduled task "calcStats" started')
        admin.calcStats();
    });

    console.log("job scheduler: dumpTimeEntry (every day at 04:05)");
    scheduler.scheduleJob({hour: 4, minute: 5}, function() {  // every day at 04:05
        console.log('scheduled task "dumpTimeEntry" started')
        admin.dumpTimeEntry();
    });

    console.log("job scheduler: backupTimeEntry (every hour at 10 past (??:10)");
    scheduler.scheduleJob({minute: 10}, function() {
        console.log('scheduled task "backupTimeEntry" started')
        admin.backupTimeEntry();
    });

    /*
    console.log("job scheduler: test");
    scheduler.scheduleJob({}, function() {
        console.log('schedule: ' + new Date());
    });
    */ 


    /*
    # .---------------- minute (0 - 59)
    # |  .------------- hour (0 - 23)
    # |  |  .---------- day of month (1 - 31)
    # |  |  |  .------- month (1 - 12) OR jan,feb,mar,apr ...
    # |  |  |  |  .---- day of week (0 - 6) (Sunday=0 or 7) OR sun,mon,tue,wed,thu,fri,sat
    # |  |  |  |  |
    # *  *  *  *  * user-name  command to be executed
    schedule.scheduleJob('0 17 ? * 0,4-6', function(){
    */
};