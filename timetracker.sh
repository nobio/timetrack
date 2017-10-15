#!/bin/sh

export LOG=/var/log/timetracker.log
export PORT=30000

echo "timetracker service script running: $1" >> $LOG

case "$1" in
        start)
                /usr/local/bin/node /share/CACHEDEV1_DATA/homes/admin/Projects/timetracker/server >> /var/log/timetracker.log 2>&1 &
		sleep .5
		echo started node process with PID `/sbin/pidof node` >> $LOG
                ;;
        stop)
		echo "killing by searching for node processes" >> $LOG
		echo `/sbin/pidof node` >> $LOG
                /bin/kill `/sbin/pidof node` >>$LOG
		echo "killing by searching for port $PORT" >> $LOG
		for pid in `lsof -i :30000|grep -v PID|awk '{$1=""; print $2}'|sort -u`; do echo killing process $pid >> $LOG; kill -9 $pid; done
                ;;
        restart)
                $0 stop
                $0 start
                ;;
        *)
                echo "Usage: $0 {start|stop|restart}"
                exit 1
esac


exit 0

