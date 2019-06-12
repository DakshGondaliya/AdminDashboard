export interface Plan{
    plan_name: string;
    plan_code: string;
    description: string;
    isCustomPlan: Boolean;
    isDefault: Boolean;
}

export interface Plans{
    plans: Array<Plan>
}

