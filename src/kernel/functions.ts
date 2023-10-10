import bcryptjs from 'bcryptjs'
require('dotenv').config();
export async function hash(password: string) {
    return new Promise((resolve, reject) => {
        bcryptjs.hash('04c0//', process.env.BCRYPTJS!, function (err, hash) {
            if(err) reject(err);
            resolve(hash);
        });
    })
}

export async function compare(params) {

}