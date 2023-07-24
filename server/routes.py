""" API server """

from flask import Flask, request, jsonify
import os

from drive import Drive
from sensors import Sensors

app = Flask(__name__, static_folder=os.getcwd())	# creating & configuring app

obj_drive = Drive()
obj_sensor = Sensors()


# POST = sending data, GET = retrieving data & by default methods=['GET']
@app.route('/move', methods=['POST'])
def move():
    data = request.get_json(force=True)                             # receiving data from interface pack
    reply = obj_drive.move(data['direction'], data['distance_cm'])  # sending parameters to control function & storing response
    return jsonify({'message': reply})                              # passing response message to interface pack

@app.route('/turn', methods=['POST'])
def turn():
    data = request.get_json(force=True)
    reply = obj_drive.turn(data['direction'])
    return jsonify({'message': reply})

@app.route('/motor', methods=['POST'])
def motor():
    data = request.get_json(force=True)
    reply = obj_drive.motor(data['side'], data['direction'], data['distance_cm'])
    return jsonify({'message': reply})


@app.route('/ultrasonic', methods=['POST'])
def ultrasonic():
    data = request.get_json(force=True)
    reply = obj_sensor.ultrasonic(data['length'])
    return jsonify({'message': reply})

@app.route('/line_follower', methods=['POST'])
def line_follower():
    data = request.get_json(force=True)
    reply = obj_sensor.line_follower(data['colour'])
    return jsonify({'message': reply})


# to execute interface package in same address as API server
@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)


if __name__ == '__main__':
    app.run()
