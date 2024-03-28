const TEMP_DIR_NAME = 'tikpedia_temp';
const TEMP_DIR = '/tmp';
const PASSWORD = 'pass123';

module.exports = {
  createUserDataZip: (userDataText) => {
    console.log('Creating zip file');
    const filename = 'user_data.txt';
    const filepath = TEMP_DIR + '/' + TEMP_DIR_NAME + '/' + filename;
    const zip = TEMP_DIR + '/' + TEMP_DIR_NAME + '/' + 'user_data.zip';

    console.log(filename);
    console.log(filepath);
    console.log(zip);

    try {
      $os.writeFile(filepath, userDataText, 0o777);
    } catch (e) {
      console.error('Error writing file');
      console.error(e);
    }

    console.log('Writing file');

    // zip -p pass123 ccat-command.zip ccat-1.1.0/

    const cmd = $os.cmd('zip', '-P', PASSWORD, zip, filepath);

    const o = String.fromCharCode(...cmd.output());

    console.log(o);

    return {
      path: zip,
      password: PASSWORD,
    };
  },
  prepareTemp: () => {
    const path = TEMP_DIR + '/' + TEMP_DIR_NAME;
    console.log(path);
    try {
      $os.readDir(path);
    } catch (e) {
      console.log('Creating temp dir');

      const cmd = $os.cmd('mkdir', '-m', '777', '/tmp/tikpedia_temp');

      const o = String.fromCharCode(...cmd.output());

      console.log(o);
    }
  },
};
