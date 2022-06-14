declare const _default: import("vue").DefineComponent<{
    province: {
        type: StringConstructor;
        default: string;
    };
    city: {
        type: StringConstructor;
        default: string;
    };
    area: {
        type: StringConstructor;
        default: string;
    };
}, {
    msg: import("vue").Ref<string>;
    provinceVal: import("vue").Ref<string>;
    cityVal: import("vue").Ref<string>;
    areaVal: import("vue").Ref<string>;
    provinceList: import("vue").Ref<{
        [x: string]: any;
        name: string;
    }[]>;
    cityList: import("vue").Ref<{
        [x: string]: any;
        name: string;
    }[]>;
    areaList: import("vue").Ref<{
        [x: string]: any;
        name: string;
    }[]>;
    totalData: import("vue").Ref<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    province?: unknown;
    city?: unknown;
    area?: unknown;
} & {
    province: string;
    city: string;
    area: string;
} & {}>, {
    province: string;
    city: string;
    area: string;
}>;
export default _default;
