import type { Device } from "$lib/device"


export async function load({ fetch }) {
    let url_sensor = "http://localhost:65534/api/devices"
    let devs: Device[] = fetch(url_sensor).then(r => r.json())

    return {
        devices: devs,
    }
}

export const actions = {
    default: async ({ fetch, request }) => {
        const url_device = "http://localhost:65534/api/devices"
        const data = await request.formData();
        const device_name = data.get('name');
        const device_location = data.get('location');

        if (!device_name || !device_location) return { status: false }

        console.log(device_name, device_location);

        var res = await fetch(url_device, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: device_name, location: device_location })
        })

        console.log(res)

        return { status: true }
    }
}
