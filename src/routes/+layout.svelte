<script>
    import {
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl,
        Navbar,
    } from "flowbite-svelte";
    import "../app.css";
</script>

<header>
    <Navbar>
        <NavBrand href="/">
            <span class="self-center whitespace-nowrap text-xl font-semibold"
                >Hemrs</span
            >
        </NavBrand>
        <NavHamburger />
        <NavUl>
            <NavLi href="/" style="hover">Home</NavLi>
            <NavLi href="/devices">Devices</NavLi>
            <NavLi href="/sensors">Sensors</NavLi>
            <NavLi href="/measurements">Measurements</NavLi>
        </NavUl>
    </Navbar>
</header>

<slot />
