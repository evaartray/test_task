from time import time
from typing import Iterable

class Sensor:
    sensor_id: int
    model: str
    handlers: Iterable
    outputs: Iterable

    def __init__(self, handlers: Iterable, outputs: Iterable, sensor_id: int, model: str):
        self.sensor_id = sensor_id
        self.model = model
        self.handlers = handlers[:2]
        self.outputs = outputs[:1]


class Message:
    sensor_id: int
    model: str
    payload: str

    def __init__(self, sensor_id: int, model: str, payload: str = ""):
        self.sensor_id = sensor_id
        self.model = model
        self.payload = payload

    def __str__(self):
        return 'Sensor ID: ' + str(self.sensor_id) + \
               '\nModel: ' + str(self.model) + \
               '\nPayload: ' + str(self.payload)


def trim(message):
    message.payload = message.payload.strip()
    return message


def pad_to_multiple(message, char: str, n: int):
    if len(message.payload) % n == 0:
        # uncomment the line before 'return' if it is needed to add a next multiple of an N number
        # because now it pads the payload only if the existing length is not a multiple of the N number already
        # message.payload = message.payload + (char * n)
        return message
    else:
        n = n - len(message.payload) % n
        message.payload = message.payload + (char * n)
        return message


def add_timestamp(message):
    timestamp = int(time())
    message.payload = message.payload + '_' + str(timestamp)
    return message


# Menu
print("Welcome to the System!\
      \nPlease provide the following information:")
sensor_id = int(input("Sensor ID: "))
sensor_model = input("Sensor model: ")
payload = input("Payload: ")

message1: Message = Message(sensor_id, sensor_model, payload)

print("\nWould you like to modify the payload with handlers?")
add_handler = input("\nEnter your choice (yes/no): ")

def write_to_file(message: Message):
    # print to file
        f = open('file.txt', 'w')
        f.write(str(message))
        f.close()

def print_message(message: Message):
    print("Where do you want to see the output?\
          \n1. Console\
          \n2. Text file\
          \n3. Console and Text file")

    output_choice = input("\nWrite the number of your choice: ")
    #for x in output_choice:
    if output_choice == '1':
        # print to console
        print(message)

    elif output_choice == '2':
        write_to_file(message)

    elif output_choice == '3':
        # print to console and text file
        print(message)
        write_to_file(message)


def print_menu():
    print("\nChoose from list:\
              \n1. Trim\
              \n2. Pad to multiple\
              \n3. Add timestamp")

def goodbye():
    print("\nGoodbye!")
    exit()

if add_handler == "no":
    print_message(message1)
    goodbye()

elif add_handler == 'yes':
    print_menu()

menu_choice = [int(x) for x in input("\nPlease type your choice by number/numbers separated by comma\
                        \nExample: 1,2,3 or 3,1, or 2\n").split(",")]

for i in menu_choice:
    if i == 1:
        message1 = trim(message1)        

    elif i == 2:
        # Char and N for pad_to_multiple function
        char1 = '%'
        n1 = 7
        message1 = pad_to_multiple(message1, char1, n1)

    elif i == 3:
        message1 = add_timestamp(message1)

    else:
        print("The input is incorrect, please try again")
        print_menu()

print_message(message1)