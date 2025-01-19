# This code snippet is adapted from an example on Tutorials Point Website
# Source: https://www.tutorialspoint.com/python_network_programming/python_dns_look_up.htm

# Importing the dnspython library for DNS-related functionality
import dnspython as dns
import dns.resolver  # Importing the resolver module for DNS queries

# Using the resolver to query DNS records for the domain 'tutorialspoint.com'
# The query is specifically for 'A' records, which map domain names to IP addresses
result = dns.resolver.query('tutorialspoint.com', 'A')

# Iterating over each record returned in the query result
for ipval in result:
    # Converting the record to text format and printing it
    # This will display the IP address associated with the 'A' record
    print('IP', ipval.to_text())
