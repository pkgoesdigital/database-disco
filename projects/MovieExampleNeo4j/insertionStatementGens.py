from random import shuffle, seed
from faker.providers.person.en import Provider
import pandas as pd 
import json
import os
os.getcwd()

from faker import Faker
fake =Faker()

# patient data gen
i = 0
count = 1000
data_dict = {}
while i <= count:
    id = 'p' + str(i) + ':'
    name = fake.first_name() + " " + fake.last_name()
    phone = fake.phone_number()
    data = {
                'CREATE (':[id],
                'name':[name],
            }
    data_dict[i] = data
    i += 1
    
with open('patients.csv', 'w') as f:
    for key in data_dict.keys():
        f.write("%s"%(data_dict[key]))
        f.write('\n')

from faker import Faker
fake =Faker()

# Doctor data gen
i = 0
count = 100
data_dict = {}
while i <= count:
    id = 'd' + str(i) + ':'
    name = fake.first_name() + " " + fake.last_name()
    data = {
                'CREATE (':[id],
                'name':[name],
            }
    data_dict[i] = data
    i += 1
    
with open('doctors.csv', 'w') as f:
    for key in data_dict.keys():
        f.write("%s"%(data_dict[key]))
        f.write('\n')


# 1000 unique illnesses

from faker import Faker
fake =Faker()

i = 0
count = 1000
data_dict = {}
while i <= count:
    id = 'i' + str(i) + ':'
    name = fake.word()
    data = {
                'CREATE (':[id],
                'name':[name],
            }
    data_dict[i] = data
    i += 1
    
with open('illness.csv', 'w') as f:
    for key in data_dict.keys():
        f.write("%s"%(data_dict[key]))
        f.write('\n')


# 750 unique treatments

from faker import Faker
fake =Faker()

i = 0
count = 750
data_dict = {}
while i <= count:
    id = 't' + str(i) + ':'
    name = fake.word()
    data = {
                'CREATE (':[id],
                'name':[name],
            }
    data_dict[i] = data
    i += 1
    
with open('treatment.csv', 'w') as f:
    for key in data_dict.keys():
        f.write("%s"%(data_dict[key]))
        f.write('\n')