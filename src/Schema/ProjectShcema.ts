import { z } from "zod";

// التحقق من كائن الأيقونة
const IconSchema = z.object({
  // اسم الأيقونة يجب أن يكون نصاً ولا يقل عن حرفين
  name: z.string().min(1, "يجب اختيار أيقونة"),
  // التحقق من أن اللون بتنسيق Hex صحيح
  color: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, "تنسيق اللون غير صحيح"),
  // إذا كنت تستخدم ID للأيقونة أضفه هنا
  // id: z.union([z.string(), z.number()]).optional(), 
});

// التحقق من كائن المشروع بالكامل
export const ProjectSchema = z.object({
  id: z.number(),
  
  name: z.string()
    .min(3, "اسم المشروع يجب أن يكون 3 أحرف على الأقل")
    .max(50, "اسم المشروع طويل جداً"),
    
  description: z.string()
    .min(5, "الوصف يجب أن يكون 5 أحرف على الأقل")
    .max(200, "الوصف لا يجب أن يتجاوز 200 حرف").optional(),
    
  // التحقق من التاريخ (يمكنك جعله string أو Date)
  CompleteDate: z.string().min(1, "يرجى تحديد تاريخ الانتهاء"),
  
  icon: IconSchema,
});

// استخراج النوع (Type) من الـ Schema للاستخدام في TypeScript
export type ProjectSchemaType = z.infer<typeof ProjectSchema>;