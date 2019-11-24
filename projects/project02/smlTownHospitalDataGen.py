# Now that we have the schema in place, we need to insert a bunch of data 
# and run a couple of queries! 
# Create load scripts for each database that will insert at least 
# 10000 unique patients, 100 unique doctors, 1000 unique illnesses, 
# and 750 unique treatments. Every patient should be seeing 1-5 doctors, 
# and should have between 0-3 different illnesses. 
# Any patients that have an illness should be receiving at least one treatment.
#  Doctors have a 35% chance of being a patient themselves, in 
#  which case the patient rules apply to them.
# Once you have the data inserted, design queries for Postgres and Neo4j 
# that query for a patient's doctors, illnesses, and treatments. 
# Is it possible to return all of this information in one query, 
# or are multiple queries required? 
# Include the queries and answer to the question in 
# projects/project02/queryComparison.txt

