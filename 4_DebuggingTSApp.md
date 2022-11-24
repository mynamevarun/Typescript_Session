### Debugging TS application

    1. We can debug our code line by line. 
    2. In  tsconfig enable sourcemap . 
        It is file that specifies how each line of our TS code is maps to the generated JS code.
    3. Recompile our code
    4. In dist folder a new file is there index.js.map
    5. The code defines how TS code is mapped to JS code
    6. This is not for us to understand. it is for debuggers.
   
    if (age < 50) {
        age += 10;
    }

    7. Click on the first line to insert a breakpoint.
        When we start debugging execution stop right at this point.
        From this point we can execute our code line by line.
    8. Go to the debug panel and click on launch a json file
    9. From the dropdown select the node.js
    10.It will create a new file called launch.json
        This is a file with some config that tells our debugger how to debug our code.
    11.Use node to launch the program and here we have label Launch Program
    12.And we can see our program starts here from index file and also we can see our output dir
    11.Add one more setting preLaunchTask and in this we add this value 'tsc: build - tsconfig.json'
        Using this line of code we are telling vs code to use tsc to build our application using this config file.
    12.Now to debug go to debug panel and click on launch program.
    13.Now program started and it will stop at break point and here we can see how its flow goes.
        we just check this step over which executes line one by one.
    14.On the left hand side under variables we can see the variables and their values.
    15.Here under watch you can add variable whose value you want to check like how it is getting changed.
    