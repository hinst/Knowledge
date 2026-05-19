# Configuration file template

```yaml
storage:
  dbPath: /home/my/app/MongoDB/data
  wiredTiger:
    engineConfig:
      cacheSizeGB: 0.25
replication:
  replSetName: rs0
```

Launch Mongo Shell and run `rs.initiate()` once\

# Mongo Shell

Start session:

	mongosh "connection_string"

List of databases:

	show dbs

# Mongo dump and restore

Useful settings for both `mongodump` and `mongorestore`

	--uri
	--archive=file.gz
	--gzip
	--numParallelCollections=1

Useful settings for `mongodump`

	--forceTableScan

Useful settings for `mongorestore`

	--drop
	--nsFrom="${SOURCE_DB_NAME}.*" --nsTo="${TARGET_DB_NAME}.*"