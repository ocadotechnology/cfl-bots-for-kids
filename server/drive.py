""" For motors """

from buildhat import Hat, MotorPair
from time import sleep
import sensors


hat = Hat()
ports = hat.get()           # storing information about connected device

motors = []
for key, value in ports.items():
    if value['name'] == 'Motor':
        motors.append(key)
        
drive = None
if len(motors) >= 2:
    drive = MotorPair(motors[0], motors[1])   # initialising motor ports

speed = 45      # default speed


# ...in use if sensor is connected, checking ahead (optional)
distance_sensor = sensors.distance_sensor
if distance_sensor:		        # True if distance_sensor != None
    light = sensors.distance    # storing functionalities


class Drive():
    """Pair of Motors featuring library"""

    def move(self, direction, distance_cm):
        """
        To move either forward or reverse

        :param direction: 'f' for Forward / 'r' for Reverse
        :param distance_cm: Value in centimeter
        :raises ErrorMessage: Occurs if pair of motors not connected / invalid parameter value
        """

        if drive != None:                       # checking if pair of motors are connected
            time = int(distance_cm) / speed     # calculating time
            if (direction == 'f'):              # checking direction

                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(70, 70, 70, 70)
                        sleep(0.5)
                        light.eyes(0, 0, 0, 0)
                        sleep(0.5)
                    light.eyes(100, 100, 100, 100)

                drive.run_for_seconds(time, speedl=-speed, speedr=speed)    # moving forward

            elif (direction == 'r'):
                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(70, 0, 70, 0)
                        sleep(0.5)
                        light.eyes(0, 70, 0, 70)
                        sleep(0.5)
                    light.eyes(100, 100, 100, 100)

                drive.run_for_seconds(time, speedl=speed, speedr=-speed)    # moving backward
            
            else:
                return "Wrong parameter value passed!"      # in case of wrong value passed

            # checking to turn off lights (optional)
            if distance_sensor:
                sleep(0.5)
                light.eyes(0, 0, 0, 0)

            drive.stop()                        # stopping motors completely
            return "Moved successfully!"        # success message
            
        else:
            return "Pair of Motors not found!"  # if one or both the motors are not connected

    def turn(self, direction):  # ...function to turn either right or left
        """
        To turn either right or left

        :param direction: 'r' for Right / 'l' for Left
        :raises ErrorMessage: Occurs if pair of motors not connected / invalid parameter value
        """

        if drive != None:                       # checking if pair of motors are connected
            if (direction == 'r'):              # checking direction

                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(70, 0, 70, 0)
                        sleep(0.5)
                        light.eyes(0, 0, 0, 0)
                        sleep(0.5)
                    light.eyes(100, 0, 100, 0)

                # turning right
                drive.run_for_rotations(5.5, speedl=-speed, speedr=-speed)  # turning right

            elif (direction == 'l'):
                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(0, 70, 0, 70)
                        sleep(0.5)
                        light.eyes(0, 0, 0, 0)
                        sleep(0.5)
                    light.eyes(0, 100, 0, 100)

                # turning left
                drive.run_for_rotations(5.5, speedl=speed, speedr=speed)    # turning left

            else:
                return "Wrong parameter value passed!"      # in case of wrong value passed

            # checking to turn off lights (optional)
            if distance_sensor:
                sleep(0.5)
                light.eyes(0, 0, 0, 0)

            drive.stop()                        # stopping motors completely
            return "Turned successfully!"       # success message
        
        else:
            return "Pair of Motors not found!"  # if one or both the motors are not connected

    # ...function to proceed either right or left in either forward or backward
    def motor(self, side, direction, distance_cm):
        """
        To proceed either right or left in either forward or reverse

        :param side: 'r' for Right / 'l' for Left
        :param direction: 'f' for Forward / 'r' for Reverse
        :param distance_cm: Value in centimeter
        :raises ErrorMessage: Occurs if pair of motors not connected / invalid parameter value
        """

        if drive != None:                       # checking if pair of motors are connected
            time = int(distance_cm)/speed       # calculating time

            if (side == 'r' and direction == 'f'):      # checking side and direction

                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(70, 0, 0, 0)
                        sleep(0.5)
                        light.eyes(0, 0, 70, 0)
                        sleep(0.5)
                    light.eyes(100, 0, 100, 0)

                drive.run_for_seconds(time, speedl=-(speed*2), speedr=speed)    # proceeding right in forward

            elif (side == 'l' and direction == 'f'):

                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(0, 70, 0, 0)
                        sleep(0.5)
                        light.eyes(0, 0, 0, 70)
                        sleep(0.5)
                    light.eyes(0, 100, 0, 100)

                drive.run_for_seconds(time, speedl=-speed, speedr=speed*2)    # proceeding left in forward

            elif (side == 'r' and direction == 'r'):

                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(70, 30, 70, 30)
                        sleep(0.5)
                        light.eyes(0, 30, 0, 30)
                        sleep(0.5)
                    light.eyes(100, 0, 100, 0)

                drive.run_for_seconds(time, speedl=speed*2, speedr=-speed)    # proceeding right in reverse

            elif (side == 'l' and direction == 'r'):

                # checking to use lights (optional)
                if distance_sensor:
                    for _ in range(3):
                        light.eyes(30, 70, 30, 70)
                        sleep(0.5)
                        light.eyes(30, 0, 30, 0)
                        sleep(0.5)
                    light.eyes(0, 100, 0, 100)

                drive.run_for_seconds(time, speedl=speed, speedr=-(speed*2))    # proceeding left in reverse
            
            else:
                return "Wrong parameter value passed!"      # in case of wrong value passed

            # checking to turn off lights
            if distance_sensor:
                sleep(0.5)
                light.eyes(0, 0, 0, 0)
            
            drive.stop()                            # stopping motors completely
            return "Proceeded successfully!"        # success message
        
        else:
            return "Pair of Motors not found!"      # if one or both the motors are not connected
