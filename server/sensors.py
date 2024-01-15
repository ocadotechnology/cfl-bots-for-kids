""" For sensors """

from buildhat import Hat, DistanceSensor, ColorSensor
from time import sleep


hat = Hat()
ports = hat.get()           # storing information about connected device

distance_sensor = None
color_sensor = None
for key, value in ports.items():
    if value['name'] == 'DistanceSensor':
        distance_sensor = key               # storing port value for distance sensor
    if value['name'] == 'ColorSensor':
        color_sensor = key                  # storing port value for color sensor

# ...checking if sensor(s) is/are connected
if distance_sensor:
    distance = DistanceSensor(distance_sensor)  # initialising distance sensor port
if color_sensor:
    color = ColorSensor(color_sensor)           # initialising color sensor ports


class Sensors():
    """ Sensors featuring library """

    def ultrasonic(self, length):
        """
        To verify barrier

        :param length: Value in centimeter
        :raises ErrorMessage: Occurs if distance sensor not connected
        """
        
        if distance_sensor != None:                 # checking if sensor is connected
            if length < distance.get_distance():    # checking whether exceeded minimum distance
                
                # using lights (optional)
                for _ in range(3):
                    distance.eyes(70, 0, 0, 0)
                    sleep(0.5)
                    distance.eyes(0, 70, 0, 0)
                    sleep(0.5)
                    distance.eyes(0, 0, 70, 0)
                    sleep(0.5)
                    distance.eyes(0, 0, 0, 70)
                    sleep(0.5)
                distance.eyes(0, 0, 0, 0)

                return 'Barrier detected..!!!'      # unsafe message
            
            else:
                return 'Everything is okay!'        # safe message
            
        else:
            return "Ultrasonic Sensor not found!"   # if sensor is not connected

    def line_follower(self, colour):
        """
        To verify colour

        :param colour: Any one colour from ['black', 'violet', 'blue', 'cyan', 'green', 'yellow', 'red', 'white']
        :raises ErrorMessage: Occurs if color sensor not connected
        """

        if color_sensor != None:                # checking if sensor is connected
            color.wait_until_color(colour)      # waiting for colour
            return 'Colour Found..!!!'
        
        else:
            return "Color Sensor not found!"    # if sensor is not connected
