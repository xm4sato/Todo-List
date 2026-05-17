import { AlertTitle } from '@mui/material';
import Alert, { type AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


// تحديث الـ Interface لاستقبال حالات التحكم
interface AlertChildren extends AlertProps {
    severity: "success" | "info" | "warning" | "error";
    title?: string;
    description?: string;
    open: boolean;          // ✅ لتحديد هل يظهر أم يختفي
    onClose: () => void;    // ✅ دالة لتغيير الحالة عند الضغط على X
}

export default function AlertUI({ severity, variant, sx, title, description, open, onClose }: AlertChildren) {
  // إذا كانت قيمة open خطأ (false)، لا تقم برندرة أي شيء
  if (!open) return null;

  return (
    <Stack sx={{ width: '100%', mb: 2 }} spacing={2}>
      <Alert 
        onClose={onClose} // ✅ ربط دالة الإغلاق هنا ليعمل زر الـ X
        severity={severity}
        variant={variant}
        sx={sx}
      >
        {title && <AlertTitle>{title}</AlertTitle>}
        {description} 
      </Alert>
    </Stack>
  );
}