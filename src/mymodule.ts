import fs from 'fs';
import path from 'path';

export default (dir: string, ext: string, callback: (err: NodeJS.ErrnoException | null, list?: string[]) => void): void => {
    fs.readdir(dir, (err, list) => {
        if (err) {
            return callback(err);
        }   

        const filteredList = list.filter(file => path.extname(file) === '.' + ext);
        callback(null, filteredList);
    });
};
