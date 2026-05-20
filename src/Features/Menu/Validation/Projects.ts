import { z } from "zod";
import type { ProjectType } from "@/Types/Projects";
import { ProjectSchema } from "@/Schema/ProjectShcema";

/**
 * Interface definition representing formatted validation error payloads.
 */
export interface ValidationError {
  /** @type {(string | number)[]} Structural path array locating exactly where the structural error occurred */
  path: (string | number)[];
  /** @type {string} Human-readable validation error text message string */
  message: string;
}

/**
 * ProjectValidation Helper Engine.
 * Intercepts un-serialized runtime objects and assesses data integrity metrics 
 * against predefined Zod type enforcement layouts.
 * Automatically catches anomalies and translates complex multi-nested error objects 
 * into simplified layout arrays.
 * * @param {ProjectType} projectData - The raw unverified snapshot project configuration payload data.
 * @returns {{status: boolean, errorsList: any[]}} Returns validation pass status state alongside mapped error entities.
 */
export function ProjectValidation(projectData: ProjectType): { status: boolean; errorsList: any[] } {

  try {
    ProjectSchema.parse(projectData);

    return { status: true, errorsList: [] };

  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorsList = err.issues.map((issue) => ({
        path: issue.path[0],
        message: issue.message,
      }));
      return { status: false, errorsList: errorsList };
    }

    return { 
      status: false, 
      errorsList: [{ path: ["system"], message: "حدث خطأ غير متوقع أثناء التحقق" }] 
    };
  }
}