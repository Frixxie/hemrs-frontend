import { PUBLIC_HEMRS_BASEURL } from "$env/static/public"
import type { Measurement } from "$lib/measurement"


export async function load({ fetch }) {
    let meas: Measurement[] = fetch(`${PUBLIC_HEMRS_BASEURL}/api/measurements`).then(r => r.json())

    return {
        measurements: meas
    }
}
