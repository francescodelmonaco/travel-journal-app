import { useGlobalContext } from "../contexts/GlobalContext";

export default function FilterBar() {
    const {
        moodFilter,
        setMoodFilter,
        effortFilter,
        setEffortFilter,
        priceSort,
        setPriceSort,
        dateSort,
        setDateSort,
        filterAndSortReset
    } = useGlobalContext();

    return (
        <div className="flex justify-between gap-3 bg-(--salvia) p-2 rounded-full shadow">
            <select
                name="mood-filter"
                className="bg-(--street) py-1.5 px-3 rounded-full text-(--white) cursor-pointer shadow w-1/5"
                value={moodFilter}
                onChange={e => setMoodFilter(e.target.value)}
            >
                <option value="">Voto</option>
                <option value="happy">★★★★★</option>
                <option value="neutral">★★☆☆☆</option>
                <option value="sad">☆☆☆☆☆</option>
            </select>

            <select
                name="effort-filter"
                className="bg-(--street) py-1.5 px-3 rounded-full text-(--white) cursor-pointer shadow w-1/5"
                value={effortFilter}
                onChange={e => setEffortFilter(e.target.value)}
            >
                <option value="">Impegno</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <select
                name="price-sort"
                className="bg-(--street) py-1.5 px-3 rounded-full text-(--white) cursor-pointer shadow w-1/5"
                value={priceSort}
                onChange={e => setPriceSort(e.target.value)}
            >
                <option value="">Prezzo</option>
                <option value="inc">Crescente</option>
                <option value="dec">Decrescente</option>
            </select>

            <select
                name="data-sort"
                className="bg-(--street) py-1.5 px-3 rounded-full text-(--white) cursor-pointer shadow w-1/5"
                value={dateSort}
                onChange={e => setDateSort(e.target.value)}
            >
                <option value="">Data</option>
                <option value="inc">Crescente</option>
                <option value="dec">Decrescente</option>
            </select>

            <button
                className="bg-(--peach) rounded-full shadow cursor-pointer w-1/5"
                onClick={filterAndSortReset}
            >Resetta filtri</button>
        </div>
    )
}