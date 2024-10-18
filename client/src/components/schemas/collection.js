import * as yup from "yup";


export const cardsFilterSchema = yup.object().shape({
    type: yup.string().oneOf(["All", "Monster", "PC", "NPC"]),
    class: yup.string(),
    minLevel: yup.number().positive().min(1, "min is 1"),
    maxLevel: yup.number().positive().max(20, "max is 20"),
})

