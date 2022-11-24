export interface Toast {
  id: string, 
  message: string,
  type: ToastType
}

export type ToastType = 'INFO' | 'ERROR' | 'WARN' | 'SUCCESS';