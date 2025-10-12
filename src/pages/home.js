import DeviceMonitor from '../compnents/siemens/DeviceMonitor';
import DeviceMonitor2 from '../compnents/siemens/DeviceMonitor2';
import { SiemensPollingProvider } from '../siemens_io/utils/SiemensPollingContext';

export default function Home() {
  return (
    <SiemensPollingProvider>
      <div>
        <h1>Benvenuto nella Home</h1>
        <div>
          <table>
            <tr>
              {/* <td><DeviceMonitor/></td> */}
              <td><DeviceMonitor2/></td>
            </tr>
          </table>
        </div>
      </div>
    </SiemensPollingProvider>
  );
}
