export default function DopamineToast({ message }) {
  if (!message) return null
  return <div className="toast" role="status" aria-live="polite"><span>✦</span>{message}</div>
}
