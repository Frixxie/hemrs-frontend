import type { Device } from "$lib/device"


export async function load({ fetch }) {
    let url_sensor = "http://localhost:65534/api/devices"
    let devs: Device[] = fetch(url_sensor).then(r => r.json())

    return {
        devices: devs,
    }
}
