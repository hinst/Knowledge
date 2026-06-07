const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SOURCE_DIR = 'C:\\Program Files\\AMD\\ROCm\\6.4\\bin';
const TARGET_DIR = 'C:\\Windows\\System32';

function createHardLinks() {
    // 1. Sanity check to make sure the source directory exists
    if (!fs.existsSync(SOURCE_DIR)) {
        console.error(`Error: Source directory not found at "${SOURCE_DIR}"`);
        return;
    }

    console.log(`Scanning for DLL files in: ${SOURCE_DIR}\n`);

    try {
        // 2. Read all files from the ROCm bin folder
        const files = fs.readdirSync(SOURCE_DIR);
        let linkCount = 0;

        files.forEach(file => {
            // 3. Filter for only .dll files
            if (path.extname(file).toLowerCase() === '.dll') {
                const sourcePath = path.join(SOURCE_DIR, file);
                const targetPath = path.join(TARGET_DIR, file);

                // 4. Skip if the file already exists in System32 to prevent errors
                if (fs.existsSync(targetPath)) {
                    console.log(`[Skipped] Already exists in System32: ${file}`);
                    return;
                }

                // 5. Construct and execute the native Windows mklink command
                // Wrapping paths in quotes handles the spaces in "Program Files"
                const cmd = `mklink /H "${targetPath}" "${sourcePath}"`;

                try {
                    execSync(cmd, { stdio: 'ignore' });
                    console.log(`[Created Link] ${file}`);
                    linkCount++;
                } catch (cmdError) {
                    console.error(`[Failed] Could not link ${file}. Are you running as Administrator?`);
                }
            }
        });

        console.log(`\nTask finished. Successfully created ${linkCount} new hard links.`);

    } catch (error) {
        console.error('An error occurred while reading the directory:', error.message);
    }
}

createHardLinks();
