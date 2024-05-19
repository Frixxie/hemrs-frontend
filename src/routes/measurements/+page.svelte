<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Measurement } from "$lib/measurement";
    import {
        Button,
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";

    export let data;
    let measurements: Promise<Measurement[]> = data.measurements;
</script>

<Button on:click={(_e) => goto("/measurements/new")}>New</Button>
{#await measurements}
    <p>Fetching measurements</p>
{:then measurements}
    <Table>
        <TableHead>
            <TableHeadCell>ts</TableHeadCell>
            <TableHeadCell>value</TableHeadCell>
            <TableHeadCell>unit</TableHeadCell>
            <TableHeadCell>device_name</TableHeadCell>
            <TableHeadCell>device_location</TableHeadCell>
            <TableHeadCell>sensor_name</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each measurements as measurement}
                <TableBodyRow>
                    <TableBodyCell>{measurement.timestamp}</TableBodyCell>
                    <TableBodyCell>{measurement.value}</TableBodyCell>
                    <TableBodyCell>{measurement.unit}</TableBodyCell>
                    <TableBodyCell>{measurement.device_name}</TableBodyCell>
                    <TableBodyCell>{measurement.device_location}</TableBodyCell>
                    <TableBodyCell>{measurement.sensor_name}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
{/await}
