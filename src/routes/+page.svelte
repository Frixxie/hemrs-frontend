<script lang="ts">
    import type { Device } from "$lib/device";
    import type { Measurement } from "$lib/measurement";
    import type { Sensor } from "$lib/sensor";

    export let data;

    let devices: Promise<Device[]> = data.devices;
    let sensors: Promise<Sensor[]> = data.sensors;
    let measurements: Promise<Measurement[]> = data.measurements;
</script>

{#await devices}
    <p>Fetching devices</p>
{:then devices}
    <p>Registered devices: {devices.length}</p>
{/await}
{#await sensors}
    <p>Fetching sensors</p>
{:then sensors}
    <p>Registered sensors: {sensors.length}</p>
{/await}
{#await measurements}
    <p>Fetching measurements</p>
{:then measurements}
    <p>Registered measurements: {measurements.length}</p>
{/await}
