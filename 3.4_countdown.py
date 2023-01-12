import time, datetime, sys # imports


def countdown(stop): # make a function
    while True: # infinite loop
        difference = stop - datetime.datetime.now() # declare the difference
        count_hours, rem = divmod(difference.seconds, 3600) # get the hours
        count_minutes, count_seconds = divmod(rem, 60) # get the mins
        if difference.days == 0 and count_hours == 0 and count_minutes == 0 and count_seconds == 0: # check if the time ended or not, if it ended the program will stop. but if not ended the time will continue counting down
            print("Ended") # prints end (if the time eneded)
            break # stop the program (if the time ended)
        print('Time left: ' # if the time not ended yet, prints the time left
              + str(difference.days) + " day(s) " # calc days left
              + str(count_hours) + " hour(s) " # calc hours left
              + str(count_minutes) + " minute(s) " # calc mins left
              + str(count_seconds) + " second(s) " # calc secs left
              ) # closes print's ()
        time.sleep(1) # 1 secs refresh rate

# y:m:d
year = "2023" # 3.4 date
month = "1" # 3.4 date
day = "18" # 3.4 date

# h:m:s
Hours = "0" # 3.4 date 0
Mins = "0" # 3.4 date 0
Seconds = "0" # 3.4 date 0

end_time = datetime.datetime(int(year), int(month), int(day), int(Hours), int(Mins), int(Seconds)) # declare the end time

try:
    countdown(end_time)
except KeyboardInterrupt: # if user pressed control + c the program will exit and not outputting an error
    print('Pressed Control+C, The program will now exit.')
    sys.exit(0)