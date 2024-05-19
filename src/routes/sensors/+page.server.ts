import type { Sensor } from "$lib/sensor"


export async function load({ fetch }) {
    let url_sensor = "http://localhost:65534/api/sensors"
    let sens: Sensor[] = fetch(url_sensor).then(r => r.json())

    return {
        sensors: sens,
    }
}
