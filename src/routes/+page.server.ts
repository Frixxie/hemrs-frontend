import type { Measurement } from "$lib/measurement"
import type { Sensor } from "$lib/sensor"
import type { Device } from "$lib/device"


export async function load({ fetch }) {
    let url_device = "http://localhost:65534/api/devices"
    let url_sensor = "http://localhost:65534/api/sensors"
    let url_measurements = "http://localhost:65534/api/measurements"
    let devs: Device[] = fetch(url_device).then(r => r.json())
    let sens: Sensor[] = fetch(url_sensor).then(r => r.json())
    let meas: Measurement[] = fetch(url_measurements).then(r => r.json())

    return {
        devices: devs,
        sensors: sens,
        measurements: meas
    }
}
