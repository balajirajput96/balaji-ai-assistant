# RAG Analysis — First Foundation

Document retrieval is intentionally deferred. A valid retrieval workflow must first provide a user-approved file path, extract content, retain source/page metadata, chunk and index material, retrieve attributable passages, and distinguish document facts from model interpretation. The current build does not pretend these stages exist.

Before enabling RAG, the implementation must define a retention policy, supported formats, failed-parse state, local versus cloud processing boundary, citation format, deletion behavior, and permissions. The first implementation should favor a small, testable document pipeline over opaque semantic-memory claims.
