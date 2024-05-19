import type { Device } from "$lib/device"
import type { Sensor } from "$lib/sensor"


export async function load({ fetch }) {
    let url_sensor = "http://localhost:65534/api/sensors"
    let url_device = "http://localhost:65534/api/devices"
    let sens: Sensor[] = await fetch(url_sensor).then(r => r.json())
    let devs: Device[] = await fetch(url_device).then(r => r.json())

    return {
        devices: devs,
        sensors: sens
    }
}

type Measurement = {
    device: number,
    sensor: number,
    measurement: number
}

export const actions = {
    default: async ({ fetch, request }) => {
        const url_measurements = "http://localhost:65534/api/measurements"
        const data = await request.formData();
        let device_id = data.get('device');
        let sensor_id = data.get('sensor');
        let measurement = data.get('measurement');

        console.log(device_id, sensor_id, measurement);

        let measurementData: Measurement = {
            device: Number(device_id),
            sensor: Number(sensor_id),
            measurement: Number(measurement)
        }

        var res = await fetch(url_measurements, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(measurementData)
        })

        console.log(res)

        if (res.status == 200) {
            return { status: true }
        } else {
            return { status: false }
        }
    }
}
