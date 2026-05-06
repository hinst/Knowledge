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