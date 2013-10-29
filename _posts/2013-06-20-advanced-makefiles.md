




## Makefile Macros


### $@
name of the current target
    foo: foo.c
        gcc foo.c -o $@
    bar: bar.c
        gcc bar.c -o $@

will produce foo.o and bar.o respectively

### $?
all dependencies more recent than the target
