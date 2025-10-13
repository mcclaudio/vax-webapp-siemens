import DeviceMonitor from '../compnents/siemens/DeviceMonitor';
import DeviceMonitor2 from '../compnents/siemens/DeviceMonitor2';
import VaxInputs from '../compnents/siemens/VaxInputs';
import { SiemensPollingProvider } from '../siemens_io/SiemensPollingContext';
import {ITEM_21} from '../data/vax/Inputs'

export default function Home() {
  return (
    <SiemensPollingProvider>
      <div>
        <h1>Benvenuto nella Home</h1>
        <div>
          <VaxInputs
            dbname={"DB_PMS_IT21"}
            pullerName={"DB_PMS_IT21_INPUTS"} 
            signals={ITEM_21.VAX_IN.Signals} />
        </div>
      </div>
    </SiemensPollingProvider>
  );
}
