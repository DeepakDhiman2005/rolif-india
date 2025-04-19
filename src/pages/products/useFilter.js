import electrics from "../../configs/electrics";
import furnitures from "../../configs/furnitures";
import tilesAndSanitary from "../../configs/tiles-and-sanitary";

const useFilter = (pathname = "") => {
    let _array = pathname.split('/');
    let category = _array[1];
    let subcategory = _array[2];
    let level1 = _array[3];
    let level2 = _array[4];

    if (category === 'furniture') {
        if (!subcategory || subcategory === "") {
            return furnitures.reduce((prev, item) => {
                prev.push(...item.data);
                return prev;
            }, []);
        }
        return furnitures.filter(({ category }) => category?.toLowerCase() === subcategory?.toLowerCase())?.[0]?.data || [];
    } else if (category === 'tiles-and-sanitary-ware' && subcategory === "tiles") {
        if (tilesAndSanitary?.[subcategory]?.[level1]?.[level2]) {
            return tilesAndSanitary?.[subcategory]?.[level1]?.[level2]?.data || [];
        } else if (tilesAndSanitary?.[subcategory]?.[level1]) {
            return [
                ...(tilesAndSanitary?.[subcategory]?.[level1]?.['wall']?.data || []),
                ...(tilesAndSanitary?.[subcategory]?.[level1]?.['floor']?.data || []),
            ]
        } else if (tilesAndSanitary?.[subcategory]) {
            let obj = tilesAndSanitary?.[subcategory];
            let _array = [];
            Object.keys(obj).forEach((key) => {
                let new_obj = obj[key];
                _array.push(
                    ...(new_obj?.['wall']?.data || []),
                    ...(new_obj?.['floor']?.data || []),
                )
            })
            return _array;
        } else {
            let _array = [];
            Object.keys(tilesAndSanitary).forEach((item) => {
                let obj = tilesAndSanitary?.[item];
                Object.keys(obj).forEach((key) => {
                    let new_obj = obj[key];
                    _array.push(
                        ...(new_obj?.['wall']?.data || []),
                        ...(new_obj?.['floor']?.data || []),
                    )
                })
            })
            return _array;
        }
    } else if (category === 'tiles-and-sanitary-ware' && subcategory === "sanitary-ware") {
        if (tilesAndSanitary?.[subcategory]?.[level1]) {
            return tilesAndSanitary?.[subcategory]?.[level1]?.data || [];
        } else if (tilesAndSanitary?.[subcategory]) {
            let obj = tilesAndSanitary?.[subcategory];
            let _array = [];
            Object.keys(obj).forEach((key) => {
                _array.push(...(obj[key]?.data || []));
            });
            return _array;
        } else {
            return [];
        }
    } else if (category === "electrics") {
        if(electrics?.[subcategory]){
            return electrics?.[subcategory] || [];
        } else if(electrics){
            let _array = [];
            Object.keys(electrics).forEach((key) => {
                _array.push(...(electrics?.[key] || []));
            })
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export default useFilter;