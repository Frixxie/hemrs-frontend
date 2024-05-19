import type { Measurement } from "$lib/measurement"


export async function load({ fetch }) {
    let url_measurements = "http://localhost:65534/api/measurements"
    let meas: Measurement[] = fetch(url_measurements).then(r => r.json())

    return {
        measurements: meas
    }
}
