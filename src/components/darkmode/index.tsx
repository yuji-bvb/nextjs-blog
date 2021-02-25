import { useTheme } from 'next-themes'

export const siteTitle = "Yuji's Website"
const Darkmode = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      {theme !== undefined && (
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">🌛</option>
          <option value="light">🌞</option>
        </select>
      )}
    </div>
  )
}
export default Darkmode
