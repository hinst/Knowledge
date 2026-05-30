# Recover and panic

Catching an error with `recover()` and throwing the same error with `panic()`
does not automatically preserve the original stack trace.
Therefore, the stack trace should be obtained after `recover()` using `debug.Stack()`
Afterwards either log the stack trace with `log.Printf("%s", stackTrace)`
or attach the stack trace to the error with a custom structure.