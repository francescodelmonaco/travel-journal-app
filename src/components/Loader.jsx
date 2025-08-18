export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center h-96 gap-3">
            <div class="jelly-triangle">
                <div class="jelly-triangle__dot"></div>
                <div class="jelly-triangle__traveler"></div>
            </div>

            <svg width="0" height="0" class="jelly-maker">
                <defs>
                    <filter id="uib-jelly-triangle-ooze">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="7.3" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="ooze"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="ooze"></feBlend>
                    </filter>
                </defs>
            </svg>

            <p className="text-(--street) text-lg font-semibold">Caricamento in corso...</p>
        </div>
    )
}