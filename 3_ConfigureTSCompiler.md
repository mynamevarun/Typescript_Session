### Configure TS Compiler

    Create config file
        tsc --init
    Check for the file tsconfig.json 

# target 
    1. this is used to set target jS version.
    2. depending on where you are going to deploy your application we can choose JS version.    

# module
    set to commonjs

# rootdir
    this specify the root directory of project here we can give ./
    
    if we move index.ts into src folder then we can change rootdir to './src'

# outdir
    under the EMIT we have outdir which will contain our js files.

    outdir: './dist'

    when we compile our code using TS compiler our JS code is going to be stored in this folder.

# remove comment
    TS compiler will remove all the comments in JS conversion.

# noemitonerror
    if there is some error in TS code compiler still generate JS file so if we don't want to do that enable this config.