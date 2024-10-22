import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                        width="100%" viewBox="0 0 1024 576" enableBackground="new 0 0 1024 576" xmlSpace="preserve">
                                    <path fill="#000000" opacity="1.000000" stroke="none" 
                                        d="
                                    M541.234863,294.670349 
                                        C538.777039,285.825562 536.453613,277.364380 534.020264,268.502991 
                                        C534.020264,286.787750 534.103333,304.632141 533.977905,322.475037 
                                        C533.930298,329.249969 532.072754,330.849457 525.116760,330.940247 
                                        C519.786377,331.009827 514.453552,331.025757 509.123413,330.951294 
                                        C501.627747,330.846588 498.919830,328.228210 498.722046,320.639832 
                                        C498.457397,310.487518 499.248016,300.355225 499.526489,290.217163 
                                        C500.070679,270.405945 499.856445,250.573471 499.899811,230.749695 
                                        C499.903778,228.942551 499.663147,227.097137 499.257843,225.333420 
                                        C497.529114,217.809967 500.270355,214.660522 508.290131,215.870682 
                                        C513.450439,216.649353 518.564392,216.762924 523.719177,216.565887 
                                        C529.363647,216.350143 535.001892,215.751526 540.643799,215.738525 
                                        C549.620178,215.717850 552.341125,218.040741 554.580261,226.785721 
                                        C558.535095,242.231140 562.496277,257.674927 566.471619,273.115082 
                                        C566.799927,274.390350 567.126587,275.726654 568.672852,276.181427 
                                        C570.616150,275.749817 570.458252,274.070801 570.812317,272.660431 
                                        C574.737366,257.024902 578.631897,241.381378 582.641724,225.767517 
                                        C584.609558,218.104797 587.338562,216.144806 595.281982,215.700592 
                                        C602.308533,215.307648 609.228333,216.751572 616.222351,216.682571 
                                        C620.547913,216.639893 624.875000,216.476639 629.195557,216.253967 
                                        C636.098816,215.898193 638.621277,218.943466 636.881165,225.700607 
                                        C636.634155,226.659912 636.235046,227.580063 635.918213,228.484589 
                                        C634.856201,229.585129 633.891785,227.043274 632.697144,228.729675 
                                        C632.164185,229.824295 632.803833,231.185516 633.298645,232.291153 
                                        C639.288513,245.675049 635.851318,259.620636 635.663696,273.321747 
                                        C635.551941,281.480011 634.716553,289.600861 636.638367,297.664124 
                                        C637.931030,303.087341 637.217102,308.610229 637.259827,314.091553 
                                        C637.276794,316.270752 636.459045,317.987915 634.048157,318.122314 
                                        C633.794922,320.643463 635.214905,322.130524 636.223389,323.841553 
                                        C638.415955,327.561737 637.095154,330.355408 632.769104,330.942108 
                                        C630.651733,331.229248 628.409302,331.220276 626.305359,330.863129 
                                        C619.993774,329.791840 613.734070,329.915802 607.416077,330.804535 
                                        C599.921753,331.858734 597.231689,328.699310 599.675415,321.641724 
                                        C600.818909,318.339020 601.083618,315.294922 599.862671,311.945251 
                                        C598.476257,308.141388 598.325195,304.190369 599.268860,300.148254 
                                        C600.205872,296.134552 600.641113,292.145111 599.824707,287.882721 
                                        C598.787537,282.467773 599.720581,276.938385 601.112000,271.589020 
                                        C601.784302,269.004333 601.893433,266.515472 601.294189,263.755524 
                                        C598.728455,264.783813 598.675171,266.770874 598.057983,268.410156 
                                        C591.650513,285.428345 587.977783,303.220825 583.255737,320.715729 
                                        C580.686829,330.233368 579.645020,331.041809 569.851257,330.994720 
                                        C565.687134,330.974701 561.522400,331.053223 557.357971,331.090637 
                                        C553.336853,331.126801 550.768005,329.300018 549.693420,325.341461 
                                        C546.950562,315.236969 544.147949,305.148682 541.234863,294.670349 
                                    M554.744873,237.608414 
                                        C553.280396,232.348907 553.649170,226.466995 549.525024,221.340988 
                                        C547.278687,224.431900 548.277222,226.847885 549.232422,229.275055 
                                        C551.072266,233.949982 554.660339,237.995438 553.723083,243.682816 
                                        C553.477539,245.172577 554.727783,247.201843 556.997314,249.056290 
                                        C556.186157,244.887573 555.558228,241.660477 554.744873,237.608414 
                                    M632.584595,287.980316 
                                        C632.392090,287.734314 632.132812,287.252502 632.019104,287.284637 
                                        C631.610352,287.400421 630.973389,287.632568 630.913696,287.921997 
                                        C629.694397,293.833893 631.012939,299.190216 634.679688,304.411652 
                                        C635.572754,298.686554 632.766357,293.825165 632.584595,287.980316 
                                    M529.080811,286.885101 
                                        C528.927673,288.703430 527.654846,290.535767 529.466431,293.318542 
                                        C529.466431,285.989319 529.466431,279.633057 529.466431,273.276794 
                                        C529.362000,273.272095 529.257629,273.267395 529.153198,273.262726 
                                        C529.153198,277.513245 529.153198,281.763794 529.080811,286.885101 
                                    M631.349487,252.185257 
                                        C631.614929,253.522461 631.700073,254.988403 633.692688,255.600616 
                                        C633.787109,252.853210 634.176575,250.475449 633.151978,248.122345 
                                        C631.163513,248.821808 631.441467,250.257095 631.349487,252.185257 
                                    z"/>
                                    <path fill="#000000" opacity="1.000000" stroke="none" 
                                        d="
                                    M434.510620,263.665344 
                                        C445.774658,263.536804 456.595306,263.399200 467.416046,263.265015 
                                        C473.684875,263.187286 476.199432,265.626801 476.243500,271.970581 
                                        C476.263153,274.798126 476.037659,277.626678 476.020630,280.455353 
                                        C475.978973,287.375336 473.466156,290.159760 466.396576,290.285553 
                                        C456.740173,290.457336 447.078278,290.291534 437.419067,290.339081 
                                        C430.472229,290.373291 429.161987,291.236267 428.615417,298.171295 
                                        C428.093567,304.792694 428.459625,311.481415 428.359161,318.139374 
                                        C428.197845,328.835266 425.103851,331.875153 414.449097,331.265045 
                                        C409.658691,330.990784 404.887054,330.143341 400.145477,329.330750 
                                        C395.285309,328.497925 392.597046,325.280426 391.829102,320.559235 
                                        C391.191010,316.636322 390.665924,312.714172 390.715942,308.676910 
                                        C390.925873,291.720886 390.728699,274.766235 391.549225,257.810913 
                                        C391.909058,250.374969 391.124023,242.881805 390.818695,235.416260 
                                        C390.675232,231.908264 390.976044,228.461166 391.625610,225.005081 
                                        C392.843628,218.524384 395.944427,215.429718 402.463989,215.755936 
                                        C413.061859,216.286270 423.578125,218.804504 434.245483,217.546341 
                                        C446.820282,216.063232 459.463928,216.412888 472.067902,215.794876 
                                        C482.227875,215.296707 485.068390,218.572189 485.138306,228.806976 
                                        C485.236237,243.134476 480.634338,247.486923 466.398804,245.976364 
                                        C455.103424,244.777802 443.862152,246.361862 432.591919,246.184525 
                                        C429.760406,246.139954 426.310211,251.323105 426.256989,255.126190 
                                        C426.194092,259.625916 429.248505,262.962402 434.510620,263.665344 
                                    M425.685669,315.733673 
                                        C425.732422,314.191498 425.410370,312.855133 424.292908,311.625122 
                                        C419.589355,306.447632 420.560760,300.435547 421.863953,294.375183 
                                        C417.382782,304.703979 419.077118,314.756622 423.299774,325.438202 
                                        C425.160004,322.331909 425.590515,319.486237 425.685669,315.733673 
                                    z"/>
                                    </svg>
                            </div>
                            <nav className="-mx-3 flex flex-1">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                       

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
