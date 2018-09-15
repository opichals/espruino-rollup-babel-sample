import { buildEspruinoConfig } from 'rollup-plugin-espruino-modules';
import babel from 'rollup-plugin-babel';


const config = buildEspruinoConfig({
  input  : 'src/entry.js',
  output : {
    file: 'bundle.js',
  },
  espruino: {
    board: 'ESP8266_4MB'
  }
});

config.plugins.unshift(babel());

// console.log( config );
export default config;
