import utils from 'util';

import { exec } from "child_process";
// exec('dir', (err, stdout, stderr) => {
//     console.log(err)
//     console.log(stderr);
//  console.log(stdout)
// });

const execP=utils.promisify(exec);

const main=async ()=>{
    const stdout=await execP('dir');

    console.log(stdout);
};

main();

