<script lang="ts">
    import { goto } from "$app/navigation";
    import type { Sensor } from "$lib/sensor.js";
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

    let sensors: Promise<Sensor[]> = data.sensors;
</script>

<Button on:click={(_e) => goto("/sensors/new")}>New</Button>
{#await sensors then sensors}
    <Table>
        <TableHead>
            <TableHeadCell>id</TableHeadCell>
            <TableHeadCell>name</TableHeadCell>
            <TableHeadCell>unit</TableHeadCell>
        </TableHead>
        <TableBody>
            {#each sensors as sensor}
                <TableBodyRow>
                    <TableBodyCell>{sensor.id}</TableBodyCell>
                    <TableBodyCell>{sensor.name}</TableBodyCell>
                    <TableBodyCell>{sensor.unit}</TableBodyCell>
                </TableBodyRow>
            {/each}
        </TableBody>
    </Table>
{/await}
