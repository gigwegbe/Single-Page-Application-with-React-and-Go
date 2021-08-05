import psycopg2
try:
    db = psycopg2.connect("dbname='go_movies' user='george'  password=''")
except:
    exit(1)

exit(0)
