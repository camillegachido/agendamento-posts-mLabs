import React, { useState, useEffect, createRef, useLayoutEffect } from 'react'

interface PropsFileInput {
   handleDrop: (files: FileList) => void
   children: React.ReactNode
}

export function FileInput({
   handleDrop: pHandleDrop,
   children,
}: PropsFileInput): JSX.Element {
   const [drag, setDrag] = useState(false)
   const dropRef = createRef<HTMLDivElement>()

   const handleDrag = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
   }

   const handleDragIn = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
         setDrag(true)
      }
   }

   const handleDragOut = (e: Event) => {
      e.preventDefault()
      e.stopPropagation()
   }

   const handleDrop = (e: DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setDrag(false)
      if (e.dataTransfer?.files && e.dataTransfer?.files.length > 0) {
         pHandleDrop(e.dataTransfer.files)
         e.dataTransfer.clearData()
      }
   }

   useEffect(() => {
      const div = dropRef.current
      if (div) {
         div.addEventListener('dragenter', handleDragIn)
         div.addEventListener('dragleave', handleDragOut)
         div.addEventListener('dragover', handleDrag)
         div.addEventListener('drop', handleDrop)
      }
   }, [])

   useLayoutEffect(() => {
      const div = dropRef.current
      if (div) {
         div.removeEventListener('dragenter', handleDragIn)
         div.removeEventListener('dragleave', handleDragOut)
         div.removeEventListener('dragover', handleDrag)
         div.removeEventListener('drop', handleDrop)
      }
   }, [])

   return <div ref={dropRef}>{children}</div>
}

export default FileInput
